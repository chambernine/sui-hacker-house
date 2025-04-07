"use client";

import { generateNonce, generateRandomness } from "@mysten/sui/zklogin";
import { getFullnodeUrl, SuiClient } from "@mysten/sui/client";
import { useLayoutEffect, useState } from "react";
import { UserKeyData } from "@/types/UsefulTypes";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";

export default function Login() {
  const [loginUrl, setLoginUrl] = useState<string | null>();

  const suiClient = new SuiClient({ url: getFullnodeUrl("testnet") });

  async function prepareLogin() {
    const { epoch } = await suiClient.getLatestSuiSystemState();
    const maxEpoch = parseInt(epoch) + 2; // this means the ephemeral key will be active for 2 epochs from now.
    const ephemeralKeyPair = new Ed25519Keypair();
    const randomness = generateRandomness();
    const nonce = generateNonce(
      ephemeralKeyPair.getPublicKey(),
      maxEpoch,
      randomness
    );

    const userKeyData: UserKeyData = {
      randomness: randomness,
      nonce: nonce,
      ephemeralPublicKey: ephemeralKeyPair.getPublicKey().toBase64(),
      ephemeralPrivateKey: ephemeralKeyPair.getSecretKey(),
      maxEpoch: maxEpoch,
    };

    localStorage.setItem("userKeyData", JSON.stringify(userKeyData));
    return userKeyData;
  }

  function getRedirectUri() {
    const protocol = window.location.protocol;
    const host = window.location.host;
    const customRedirectUri = protocol + "//" + host + "/auth";
    return customRedirectUri;
  }

  useLayoutEffect(() => {
    prepareLogin().then((userKeyData) => {
      const REDIRECT_URI = "http://localhost:3000/login";
      const customRedirectUri = getRedirectUri();
      const params = new URLSearchParams({
        // When using the provided test client ID + redirect site, the redirect_uri needs to be provided in the state.
        state: new URLSearchParams({
          redirect_uri: customRedirectUri,
        }).toString(),
        // Test Client ID for devnet / testnet:
        client_id:
          "54146813435-ri6o0g4kfve63288lsmu0a3bjcvml1qe.apps.googleusercontent.com",
        redirect_uri: REDIRECT_URI,
        response_type: "id_token",
        scope: "openid",
        nonce: userKeyData.nonce,
      });

      setLoginUrl(`https://accounts.google.com/o/oauth2/v2/auth?${params}`);
    });
  }, []);

  return (
    <div>
      <div className="text-3xl font-bold pb-6">
        <h3>Welcome to the ZK Login Demo Page!</h3>
      </div>

      <div className="flex mt-4 mb-10 space-x-4 justify-center">
        <a href={loginUrl!} className="hover:text-blue-600" target="_blank">
          <button className="bg-white text-gray-700 hover:text-gray-900 font-semibold py-2 px-4 border rounded-lg flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            <span>Login with Google</span>
          </button>
        </a>
      </div>

      <div className="bottom-2">
        <footer className="text-center">
          <a
            href="https://github.com/teohaik/poc-zklogin"
            className="hover:text-blue-600"
            target="_blank"
          >
            See the Source Code
          </a>
        </footer>
      </div>
    </div>
  );
}
