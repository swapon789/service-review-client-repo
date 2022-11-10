import { useEffect } from "react"

const useTitle = title => {
    useEffect(() =>{
      document.title=`Dental-Expert-${title}`
    },[title])
}

export default useTitle;