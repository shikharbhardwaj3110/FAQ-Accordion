import React, { useEffect, useState } from 'react'
import { RiSearch2Line } from "react-icons/ri";
import { IoArrowDownCircleOutline, IoArrowUpCircleOutline } from "react-icons/io5";

const queryList = [
  {
    id: 1,
    query: 'Is free trial available ?',
    text: 'Free trial is available only on selected products from the catalogue. You enjoy a 3-day return policy on eleigible products.',
    state: false
  },
  {
    id: 2,
    query: 'Can I expedite my order ?',
    text: 'We treat every order with utmost priority here. Delivery times can not be reduced by expediting orders.',
    state: false
  },
  {
    id: 3,
    query: 'How do I exchange a defective product ?',
    text: 'Should your product be delivered in a defective condition, you may appeal for exchange on the Help page. Decisions on appeals are subject to current condition of the product.',
    state: false
  },
  {
    id: 4,
    query: 'Can I change my phone number associated with the account ?',
    text: 'You can change your registered phone number from the Profile page located in My Account tab.',
    state: false
  }
]

const Queries = () => {

  const [queryState, setQueryState] = useState(queryList)
  const [searchValue, setSearchValue] = useState('')
  const [addState, setAddState] = useState(false)
  const [title, setTitle] = useState('')
  const [answer, setAnswer] = useState('')

  const filteredState = queryState.filter(query => {
    if (searchValue == "") return query
    return query.query.toLowerCase().includes(searchValue.toLowerCase())
  })

  const toggleQuery = (e, i) => {
    let newState = queryState.map(query => {
      if (query.id === i) {
        return {
          ...query,
          state: !query.state
        }
      }
      return query
    })
    setQueryState(newState)
  }

  const saveFaq = () => {
    let updatedState = [...queryState, {id : queryState.length + 1, state : false, query : title, text : answer}]
    setAddState(false)
    setQueryState(updatedState)
  }

  const addFaq = () => {
    return (
      <div className='mt-4 border m-auto p-3 rounded bg-light d-flex flex-column faq-add-container'>
        <input placeholder='Title' className='faq-add-input form-control ps-2' value={title} onChange={(e) => {setTitle(e.target.value)}}></input>
        <input placeholder='Answer' className='mt-2 faq-add-input form-control ps-2' value={answer} onChange={(e) => {setAnswer(e.target.value)}}></input>
        <button className='mt-3 btn btn-success' onClick={()=> {saveFaq()}}>Save</button>
      </div>
    )
  }

  return (
    <div className='mt-5 d-flex justify-content-center flex-column'>
      <div className='d-flex justify-content-center'>
        <div className='border d-flex align-items-center search-bar py-md-3 py-2'>
          <RiSearch2Line size={20} className='ms-3 search-icon' color='gray' />
          <input className='border-0 w-100 ms-3 search-input' placeholder='Search' value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }}></input>
        </div>
      </div>

      <div className='text-center mt-4'>
        <button className='btn btn-dark rounded' onClick={(e) => {setAddState(!addState)}}>Add an FAQ</button>
      </div>
      {
        addState ? addFaq() : null
      }
      <div className='query-container m-auto'>
        {
          filteredState.map((query, i) => {
            return (
              <div className='border border-top-0 border-start-0 border-end-0 d-flex align-items-center py-4 query-inner-container' onClick={(e) => { toggleQuery(e, query.id) }}>
                <div className='query-text flex-grow-1'>
                  <span className='query-text-main'>{query.query}</span>
                  {
                    query.state ? <p className='mt-3 text-secondary query-subtext-main'>{query.text}</p> : null
                  }
                </div>
                <div className='query-toggle d-flex ps-3'>
                  {
                    query.state ? <IoArrowUpCircleOutline size={27} color='gray' /> : <IoArrowDownCircleOutline size={27} color='gray' />
                  }

                </div>

              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Queries