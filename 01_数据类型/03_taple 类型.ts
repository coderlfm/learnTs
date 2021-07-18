
// 元组类型
// 需要制定 数组中具体类型，元组类型的典型示例
// function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
const info:[ string, number ] = [ 'lfm', 18 ]


// 基础版
// function useState(initState:any):[ any, (value:any)=> void ]{
//   let state = initState;

//   function setState(value:any){
//     state = value;
//   }

//   return [state, setState];
// }


function useState<T>(initState:T):[ T, (value: T)=> void ]{
    let state = initState;
  
    function setState(value:T){
      state = value;
    }
  
    return [state, setState];
}

const [counter, setCounter] = useState(1);
setCounter(3);

const [flag, setFlag] = useState(false);
setFlag(true);