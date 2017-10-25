const doesPasswordMeetPolicy = (password) => {
  if (!password || !password.match(/^.{12,64}$/)) {
    return false;
  }

  return true;
};

module.exports = {
  doesPasswordMeetPolicy,
};
