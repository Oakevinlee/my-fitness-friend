export default function ResultItems({result}) {
    return <> 
        <h1>hello</h1>
        <li key={1}>Name of food: <p>{result.fields.item_name}</p></li>
          <li key={2}><p> Calories: </p> <p>{result.fields.nf_calories}</p></li>
          </>

    
}