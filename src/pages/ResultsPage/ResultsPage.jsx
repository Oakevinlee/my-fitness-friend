import ResultItems from "../../components/ResultItems/ResultItems"

export default function ResultsPage({results}){
    const resultsItems = results.map(result=> {
        <ResultItems />
    })
    return <h1>{resultsItems}</h1>
}