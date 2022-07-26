import React,{useState, useEffect} from 'react'


const GlobalContext = React.createContext()

const Provider = (props) => {
    const [transactions, setTransactions] = useState(localStorage.transactions ? JSON.parse(localStorage.transactions) : [])
    const [text, setText] = useState("")
    const [amount, setAmount] = useState("")
    const [error, setError] = useState("")
    const [errorSet, setErrorSet] = useState(false)

    useEffect(() => { 
    localStorage.setItem("transactions", JSON.stringify(transactions))
    }, [transactions])

    const textChangeHandler = (e) => {
        setText(e.target.value)
    }

    const amountChangeHandler = (e) => {
        setAmount(e.target.value)
    }
    
    const addHandler = (e) => {
        e.preventDefault();

        if (amount === "" && text === "") {
            setError("Details and Amount are required")
            setErrorSet(true)
            return
        }
        if (text === "") {
            setErrorSet(true)
            setError("Please provide Transaction Details")
            setText("")
            setAmount("")
            return
        }

        if(amount === ""){
            setErrorSet(true)
            setError("Please provide Transaction Amount")
        }

        else {
            setErrorSet(false)
            setTransactions([...transactions, {
                id: Math.random(),
                text: text,
                amount: + amount,
            }])
            setText("Yesssss")
            setAmount("Yessss")
            localStorage.setItem("transactions", JSON.stringify(transactions))
        }
    }

    const states = {
        addHandler, textChangeHandler, amountChangeHandler, transactions, setTransactions
        , error, setError, errorSet, setErrorSet
    }
    return (
        <GlobalContext.Provider value={states}>
            {props.children}
        </GlobalContext.Provider>
      )
}

const Consumer = GlobalContext.Consumer

export {GlobalContext, Provider, Consumer}