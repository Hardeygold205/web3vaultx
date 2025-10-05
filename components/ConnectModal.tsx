import React from "react";
import Image from "next/image";
import { useRouter as useNa } from "next/navigation";

interface Wallet {
  name: string;
  image: string;
}

interface ConnectModalProps {
  wallet: Wallet | null;
  isOpen: boolean;
  onClose: () => void;
}

function ConnectModal({ wallet, isOpen, onClose }: ConnectModalProps) {
  const modalRef = React.useRef<HTMLDialogElement>(null);
  const router = useNa();

  React.useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.showModal();
    }
  }, [isOpen]);

  if (!isOpen || !wallet) return null;

  const handleClose = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
    onClose();
  };

  return (
    <>
      <dialog
        ref={modalRef}
        id="wallet_modal"
        className="modal modal-bottom sm:modal-middle text-white"
        onClose={handleClose}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Connect {wallet.name}</h3>
          <div className="py-4 flex flex-col items-center gap-4">
            <div className="w-24 h-24 rounded-xl flex items-center justify-center p-5 bg-white">
              <Image
                src={wallet.image}
                alt={wallet.name}
                width={60}
                height={60}
              />
            </div>
            <p className="text-center">
              You are about to connect your {wallet.name} wallet. Please confirm
              to proceed.
            </p>
          </div>
          <div className="modal-action">
            <form method="dialog" onSubmit={handleClose}>
              <button
                onClick={() => router.push("/wallet-connect")}
                className="btn">
                Confirm
              </button>
              <button
                type="button"
                className="btn btn-ghost text-red-500"
                onClick={handleClose}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default ConnectModal;
