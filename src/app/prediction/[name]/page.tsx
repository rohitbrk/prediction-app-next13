const getPredictedNationality = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io?name=${name}`);
  return res.json();
};

type Params = { params: { name: string } };

async function Prediction(obj: Params) {
  const predictedNationality = getPredictedNationality(obj?.params?.name);
  const [nationality] = await Promise.all([predictedNationality]);

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Predicted Nationality
      </h5>
      <div>
        <h4 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Name - {obj?.params?.name}
        </h4>
        <h4 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Nationality - {nationality?.country[0]?.country_id}
        </h4>
      </div>
    </div>
  );
}

export default Prediction;
