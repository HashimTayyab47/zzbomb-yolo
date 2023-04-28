const PasswordPanel = ({
    providers = [],
    redirectUrl,
    isLdapEnabled,
    hasSessionCookies,
    onLogin,
  }: PasswordPanelProps) => {
    const handleSubmit = useCallback(
      async (data: LoginData) => {
        await onLogin(data, redirectUrl);
      },
      [onLogin, redirectUrl],
    );
  