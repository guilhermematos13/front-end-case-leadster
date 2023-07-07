'use client'
import { useEffect, useState } from 'react'
import { VideoBanner } from '../VideoBanner'
import { ListInterface } from './interface'
import { api } from '@/lib/axios'
import { PageNumberButton } from './components/PageNumberButton'

export function MainContent() {
  const [list, setList] = useState<ListInterface[]>([])

  function getList() {
    api.get('videos?_page=1&_limit=9').then((response) => {
      setList(response.data)
    })
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <div className="mx-auto mt-10 w-full max-w-[1200px]">
      <div className="grid grid-cols-3 gap-8 xs:grid xs:grid-cols-1 xs:px-4 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3">
        {list.map((data) => {
          return <VideoBanner key={data.id} title={data.title} />
        })}
      </div>
      <div className="mb-10 mt-16 border border-gray-300" />
      <div className="mb-20 flex w-full items-center justify-center">
        <strong className="font-semibold text-gray-800">Página</strong>
        <PageNumberButton number="1" />
        <PageNumberButton number="2" isSelection />
      </div>
    </div>
  )
}
