import { useState } from "react";

function SampleForm() {
  const [name, setName] = useState("");
  const[address, setAddress] = useState("");
  const [gender, setGender] = useState('');
  const [favGenres, setGenres] = useState([]);
  const [ageGroup, setAgeGroup] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleGenreSel = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    
    if (checked) {
      setGenres([...favGenres, value]);
    } else {
      setGenres(favGenres.filter(genre => genre !== value));
    }
  };
  const handleSubmit = (e) => {
    //e.preventDefault();
    alert(`Hello there, ${name}; \n You stay at ${address};\n You have selected ${gender} as your gender.\n
        Your favorite movie genres are: ${favGenres.join(', ')}\n
        Your age group is: ${ageGroup}`);
        setIsSubmitted(true);
  };

  return (
    <div>
      {isSubmitted ? (
        <h2>Thank you, {name}! Your form has been submitted successfully.</h2>
      ) : (
      <form onSubmit={handleSubmit}>
      <p>
        <input 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </p>
        <p>
        <input 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your address"
        />
        </p>
        <p>
          <label>Select your Gender:</label>
          <fieldset>
          <label>
          <input type="radio" name="gender" value="Male" 
          checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={gender === 'Female'}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Other"
            checked={gender === 'Other'}
            onChange={(e) => setGender(e.target.value)}
          />
          Other
        </label>
        </fieldset>
        </p>
        <p>
          <label>Select your favorite movie Genres:</label>
          <label>
            <input
              type="checkbox"
              value="Action"
              checked={favGenres.includes('Action')}
              onChange={handleGenreSel}
            />Action
          </label>
        <label>
          <input
            type="checkbox"
            value="Suspense"
            checked={favGenres.includes('Suspense')}
            onChange={handleGenreSel}
          />
          Suspense
        </label>
        <label>
          <input
            type="checkbox"
            value="Animation"
            checked={favGenres.includes('Animation')}
            onChange={handleGenreSel}
          />
          Animation
        </label>

        </p>
        <p>
          <label>Select Your age-group: </label>
        <select value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)}>
          <option value="">--Age Group--</option>
          <option value="youngAdult">18-35</option>
          <option value="adult">35-55</option>
          <option value="senior">55+</option>
        </select>
        </p>
        <p><button type="submit">Submit</button></p>
      </form>

    )}
    </div>
  );
}

export default SampleForm;
