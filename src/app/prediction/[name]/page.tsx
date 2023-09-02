const getPredictedNationality = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io?name=${name}`);
  return res.json();
};

type Params = { params: { name: string } };

async function Prediction(obj: Params) {
  const predictedNationality = getPredictedNationality(obj?.params?.name);
  const [nationality] = await Promise.all([predictedNationality]);

  return (
    <div>
      Name: {obj?.params?.name}
      <br />
      Predicted Nationality: {nationality?.country[0]?.country_id}
    </div>
  );
}

export default Prediction;
