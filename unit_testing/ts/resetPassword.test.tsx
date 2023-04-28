import { useCallback } from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { t } from "ttag";
import ResetPasswordForm, {
  ResetPasswordData,
} from "./ResetPasswordForm";

describe("ResetPasswordForm", () => {
  test("handles password submission correctly", async () => {
    const mockOnResetPassword = jest.fn();
    const mockOnRedirect = jest.fn();
    const mockOnShowToast = jest.fn();
    const mockToken = "mock-token";

    const { getByLabelText, getByText } = render(
      <ResetPasswordForm
        token={mockToken}
        onResetPassword={mockOnResetPassword}
        onRedirect={mockOnRedirect}
        onShowToast={mockOnShowToast}
      />
    );

    const passwordInput = getByLabelText(t`New Password`);
    const confirmPasswordInput = getByLabelText(t`Confirm Password`);
    const submitButton = getByText(t`Reset Password`);

    fireEvent.change(passwordInput, { target: { value: "new-password" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "new-password" },
    });
    fireEvent.click(submitButton);

    await waitFor(() => expect(mockOnResetPassword).toHaveBeenCalled());
    await waitFor(() => expect(mockOnRedirect).toHaveBeenCalledWith("/"));
    await waitFor(() =>
      expect(mockOnShowToast).toHaveBeenCalledWith({
        message: t`You've updated your password.`,
      })
    );
  });
});
