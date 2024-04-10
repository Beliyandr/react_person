
export const Person = (props) => {
  const { name, age, sex, isMarried, partnerName } = props.person;

  let partner;
  if (sex === 'm' && isMarried) {
    partner = 'wife';
  } else {
    partner = 'husband';
  }

  return (
    <section className="Person">
      {name &&
        <h2 className="Person__name">My name is {name}</h2>
      }
      {age &&
        <p className="Person__age">I am {age}</p>
      }
      {isMarried
        ? <p className="Person__partner">{partnerName} is my {partner} </p>
        : <p className="Person__partner">I am not married</p>
      }
    </section>
  )
}
  ;
