import React from "react";
import { shallow } from "enzyme";
import PasswordPanel from "./PasswordPanel";

describe("<PasswordPanel />", () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      providers: [{ name: "Google", Button: () => null }],
      redirectUrl: "/",
      isLdapEnabled: true,
      hasSessionCookies: false,
      onLogin: jest.fn(),
    };
    wrapper = shallow(<PasswordPanel {...props} />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("calls onLogin with the correct arguments when submitted", () => {
    const form = wrapper.find("form");
    const data = { username: "testuser", password: "testpassword" };
    form.simulate("submit", { preventDefault: jest.fn() });
    const handleSubmit = wrapper.find("LoginForm").prop("onSubmit");
    handleSubmit(data);
    expect(props.onLogin).toHaveBeenCalledWith(data, props.redirectUrl);
  });
});
