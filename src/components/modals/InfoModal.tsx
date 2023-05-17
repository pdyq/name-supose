import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="mi i kan ludi e ke?" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        supose name en 6 tenta. afa kada tenta, kolo de kubo i muta, 
        so tu i savi a ke tu i supose o vere.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="M"
          status="correct"
        />
        <Cell value="A" isCompleted={true} />
        <Cell value="I" isCompleted={true} />
        <Cell value="S" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        litera "M" e en name, an e en vere loke.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="A" isCompleted={true} />
        <Cell value="M" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="U"
          status="present"
        />
        <Cell value="S" isCompleted={true} />
        <Cell value="E" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        litera "U" e en name, pero si e en mala loke.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="U" isCompleted={true} />
        <Cell value="N" isCompleted={true} />
        <Cell value="D" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="O" status="absent" />
        <Cell value="N" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        litera "O" no e en name.
      </p>

      <p className="mt-6 text-sm italic text-gray-500 dark:text-gray-300">
        a open-orijen vari de name-supose ludi ke mi-ale i savi an i
        amo -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="font-bold underline"
        >
          i mira a koda en di
        </a>{' '}
      </p>
    </BaseModal>
  )
}
