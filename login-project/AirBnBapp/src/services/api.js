api.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem('@AirBnbApp:token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  } catch (err) {
    alert(err);
  }
});