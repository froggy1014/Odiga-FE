"use server";

import { auth, signIn, signOut } from "@/auth";
import FIESTA_ENDPOINTS from "@/config/apiEndpoints";

import { env } from "@/env";
import FiestaInstance from "../FiestaInstance";
import {
  RefreshTokenResponse,
  SocialLoginRequest,
  SocialLoginResponse,
} from "./authType";
import { cookies } from "next/headers";
import { decode } from "next-auth/jwt";

const ENDPOINT = FIESTA_ENDPOINTS.users;

export async function postOauthLogin(body: SocialLoginRequest) {
  const endpoint = ENDPOINT.login;
  const response = await FiestaInstance.post<SocialLoginResponse>(endpoint, {
    json: body,
  });

  return response;
}

export const postSignOut = async () => {
  await signOut();
};

export const signInWithKakao = async () => {
  const session = await signIn("kakao");

  return session;
};

export const getRefreshToken = async (
  refreshToken: string,
): Promise<RefreshTokenResponse> => {
  const endpoint = ENDPOINT.reissue;

  const response = await fetch(`${env.NEXT_PUBLIC_BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      refreshToken,
    },
    cache: "no-store",
  }).then((res) => res.json());

  return response;
};

export const getServerSideSession = async () => {
  const session = await auth();
  return session;
};

export const getAccessTokenFromCookie = async () => {
  const sessionName =
    process.env.NODE_ENV === "production"
      ? "__Secure-authjs.session-token"
      : "authjs.session-token";
  const sessionToken = cookies().get(sessionName)?.value;

  const session = await decode({
    token: sessionToken,
    secret: env.AUTH_SECRET,
    salt: "authjs.session-token",
  });

  return session ?? null;
};
