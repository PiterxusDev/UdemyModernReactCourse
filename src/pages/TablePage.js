import SortableTable from "../components/SortableTable";
// import Table from "../components/Table";
function TablePage(){
    const data = [
        {name:'Orange', color: 'bg-orange-500', score:5},
        {name:'Apple', color: 'bg-red-500', score:4},
        {name:'Banana', color: 'bg-yellow-500', score:3},
        {name:'Grape', color: 'bg-purple-500', score:2},
        {name:'Kiwi', color: 'bg-green-500', score:1},
    ]
    const config =[
        {label: 'Fruit',
        render: (fruit) => fruit.name,
        sortValue: (fruit) => fruit.name
        },
        {label: 'Color',
         render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}/>
        },
        {label: 'Score',
         render: (fruit) => fruit.score,
        sortValue: (fruit) => fruit.score,
        // header: () => <th className="bg-red-500">Score</th> testing header
        }
    ]

    const keyFn = (fruit) => fruit.name;

    return(
        <div>
            <SortableTable data={data} config={config} keyFn={keyFn}/>
        </div>
    )
}

export default TablePage;