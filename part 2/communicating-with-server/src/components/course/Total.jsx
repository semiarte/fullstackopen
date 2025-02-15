const Total = ({parts}) => {
    const total = parts.reduce(
      (prevValue, currentValue) => prevValue + currentValue.exercises,
      0
    );
    return <p><strong>Total: {total}</strong></p>;
  };

export default Total;