export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': `"${process.env.RAPIDAPI_KEY}"`,
    'X-RapidAPI-Host': `"${process.env.RAPIDAPI_HOST}"`,
  };

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    { headers: headers }
  );

  const result = await response.json();

  return result;
}
