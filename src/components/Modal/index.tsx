'use client'
import { FileDoc, FilePpt, FileXls, X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'

interface ModalProps {
  title: string
  children: ReactNode
}

export function Modal({ title, children }: ModalProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/40" />
      <Dialog.Content className="fixed left-1/2 top-1/2 w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-lg border-t-4 border-t-blue-primary bg-gray-50 px-11 py-6 shadow-lg shadow-black/50">
        <div className="mb-6 flex justify-between gap-8">
          <div className="w-8" />
          <Dialog.Title className="text-2xl font-semibold text-gray-800">
            <strong className="text-2xl font-semibold text-blue-primary">
              Webinar:{' '}
            </strong>
            {title}
          </Dialog.Title>
          <Dialog.Close className="text-gray-800">
            <X size={24} />
          </Dialog.Close>
        </div>
        <div className="flex flex-col">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/b0KlEQ7YLQ4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <div className="mt-4 flex flex-col">
            <strong className="text-gray-800">Descrição</strong>
            <div className="mb-3 mt-1 w-full border border-gray-300" />
            <p className="text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem, suscipit dolores similique cumque dicta magni ex dolor
              error expedita quam eum. Nemo dolores error minima quasi animi
              suscipit non inventore.
            </p>
            <strong className="mt-2 text-gray-800">Downloads</strong>
            <div className="mb-3 mt-1 w-full border border-gray-300" />
            <div className="flex gap-2">
              <div className="group flex items-center">
                <div className="cursor-pointer rounded-l-md bg-green-400 p-1 text-green-700 group-hover:bg-green-300">
                  <FileXls size={20} />
                </div>
                <div className="cursor-pointer rounded-r-md bg-green-300 px-2 py-1 text-sm text-green-600 group-hover:bg-green-200">
                  Spreadsheet.xls
                </div>
              </div>
              <div className="group flex items-center">
                <div className="cursor-pointer rounded-l-md bg-blue-400 p-1 text-blue-700 group-hover:bg-blue-300">
                  <FileDoc size={20} />
                </div>
                <div className="cursor-pointer rounded-r-md bg-blue-300 px-2 py-1 text-sm text-blue-600 group-hover:bg-blue-200">
                  Document.doc
                </div>
              </div>
              <div className="group flex items-center">
                <div className="cursor-pointer rounded-l-md bg-yellow-400 p-1 text-yellow-700 group-hover:bg-yellow-300">
                  <FilePpt size={20} />
                </div>
                <div className="cursor-pointer rounded-r-md bg-yellow-300 px-2 py-1 text-sm text-yellow-600 group-hover:bg-yellow-200">
                  Presentation
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
