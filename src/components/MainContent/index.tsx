'use client'
import { useCallback, useEffect, useState } from 'react'
import { VideoBanner } from '../VideoBanner'
import { ListInterface } from './interface'
import { api } from '@/lib/axios'
import { PageNumberButton } from './components/PageNumberButton'
import { Modal } from './components/Modal'
import { ModalProps } from './components/Modal/interface'
import { NavBanner } from '../NavBanner'

export function MainContent() {
  const [list, setList] = useState<ListInterface[]>([])
  const [pageNumber, setPageNumber] = useState(1)
  const [isSelection, setIsSelection] = useState(1)
  const [totalPage, setTotalPage] = useState<number>(1)
  const [dataModal, setDataModal] = useState<ModalProps>()
  const [order, setOrder] = useState<string>()

  const limit = 9

  const getList = useCallback(() => {
    api
      .get(`videos?_page=${pageNumber}&_limit=${limit}&${order}`)
      .then((response) => {
        setList(response.data)
        setTotalPage(response.headers['x-total-count'] / limit)
        console.log(`videos?_page=${pageNumber}&_limit=${limit}&${order}`)
      })
  }, [pageNumber, order])

  useEffect(() => {
    getList()
  }, [getList])

  const renderPageButtons = () => {
    const pageButtons = []
    for (let i = 1; i <= totalPage; i++) {
      pageButtons.push(
        <PageNumberButton
          key={i}
          isSelection={isSelection === i}
          number={i.toString()}
          onClick={() => {
            setPageNumber(i)
            setIsSelection(i)
          }}
        />,
      )
    }
    return pageButtons
  }

  return (
    <>
      <NavBanner setOrder={setOrder} />
      <div className="mx-auto mt-10 w-full max-w-[1200px]">
        <div className="grid grid-cols-3 gap-8 xs:grid xs:grid-cols-1 xs:px-4 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3">
          {list.map((data) => {
            return (
              <VideoBanner
                key={data.id}
                title={data.title}
                onClick={() => {
                  setDataModal(data)
                }}
              />
            )
          })}
        </div>
        <div className="mb-10 mt-16 border border-gray-300" />
        <div className="mb-20 flex w-full items-center justify-center">
          <strong className="mr-4 font-semibold text-gray-800">Página</strong>
          {renderPageButtons()}
          {dataModal && <Modal {...dataModal} />}
        </div>
      </div>
    </>
  )
}
