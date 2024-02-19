"use client";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const onClick = () => {
    console.log("LOGIN BUTTON CLICKED");
  };

  if (mode === "modal") {
    return <span>TODO: Implement modal</span>;
  }
  return <span onClick={onClick}>{children}</span>;
};

export default LoginButton;
