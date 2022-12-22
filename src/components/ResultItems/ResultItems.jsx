export default function ResultItems({result}) {
    return <> 
        <li className="result-list" key={1}>Name of food: <p>{result.fields.item_name}</p></li>
          <li className="result-list" key={2}><p> Calories: </p> <p>{result.fields.nf_calories}</p></li>
          </>

    
}