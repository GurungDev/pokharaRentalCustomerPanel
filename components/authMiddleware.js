import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "./ui/use-toast";

const withAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const { loginStatus, token } = useSelector((state) => state.account);
    const router = useRouter();

    useEffect(() => {
      if (typeof window !== "undefined" && (!loginStatus || !token)) {
        router.push("/auth");
        toast({
          variant: "destructive",
          title: "Unauthorized",
          description:
            "You are not authorized to access this page. Please login!!",
        });
      }
    }, [loginStatus, token, router]);

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
