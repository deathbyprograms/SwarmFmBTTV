let currentChannel;

export function setCurrentChannel({provider, id, name, displayName, avatar}) {
  if (provider === 'youtube' && id.toString() === 'UC2I6ta1bWX7DnEuYNvHiptQ') {
    currentChannel = {
      provider: 'twitch',
      id: '85498365',
      name: 'vedal987',
      displayName: 'vedal987',
    };
  } else {
    currentChannel = {
      provider,
      id: id.toString(),
      name,
      displayName,
      avatar,
    };
  }
}

export function getCurrentChannel() {
  return currentChannel;
}
