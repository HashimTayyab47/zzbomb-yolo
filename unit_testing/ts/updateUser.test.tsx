import UserProfileFormContainer from './UserProfileFormContainer';
import { getUser } from 'metabase/selectors/user';
import { updateUser } from '../../actions';

jest.mock('metabase/selectors/user', () => ({
  getUser: jest.fn(),
}));

jest.mock('../../actions', () => ({
  updateUser: jest.fn(),
}));

describe('UserProfileFormContainer', () => {
  const state = {
    user: { id: 1, name: 'test' },
    locales: ['en', 'fr', 'es'],
    isSsoUser: false,
  };
  let props, wrapper;

  beforeEach(() => {
    getUser.mockReturnValue(state.user);
    props = {
      locales: state.locales,
      isSsoUser: state.isSsoUser,
      onSubmit: updateUser,
    };
    wrapper = shallow(<UserProfileFormContainer {...props} />);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should map state to props correctly', () => {
    expect(getUser).toHaveBeenCalled();
    expect(wrapper.prop('user')).toEqual(state.user);
    expect(wrapper.prop('locales')).toEqual(state.locales);
    expect(wrapper.prop('isSsoUser')).toEqual(state.isSsoUser);
  });

  it('should map dispatch to props correctly', () => {
    const onSubmit = wrapper.prop('onSubmit');
    onSubmit();
    expect(updateUser).toHaveBeenCalled();
  });
});
