const handlePasswordSubmit = useCallback(
    async ({ password }: ResetPasswordData) => {
      await onResetPassword(token, password);
      onRedirect("/");
      onShowToast({ message: t`You've updated your password.` });
    },
    [onResetPassword, token, onRedirect, onShowToast],
  );