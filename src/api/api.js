const url = 'api/v1/greetings';

const getData = async (url) => {
  try {
    const response = await fetch(url, {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchGreetings = () => getData(url);
