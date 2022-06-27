import { gql, useMutation } from '@apollo/client';
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Logo';
import { useCreateSubscriberMutation } from '../graphql/generated';

export function Subscribre(){
  const navigate = useNavigate()

  const [name , setName] = useState('');
  const [email , setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()
  async function handleSubscribe(event: FormEvent) {
    event?.preventDefault()
    
    await createSubscriber({
      variables: {
        name,
        email  
      }
    })

    navigate('/event')
  }
  
  return(
    <div className="w-full min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto" >
        <div className="max-w-[640px]" >
        <Icon /> 

        <h1 className='mt-8 text-[2.5rem] leading-tight'>
          Construa uma <strong className='text-blue-500'>aplicação completa</strong>, do zero, com <strong className='text-blue-500'>React</strong>.
        </h1>

        <p className='mt-4 text-gray-200 leading-relaxed text-justify'>
          Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
        </p>
        
        
        </div>
        
        <div className='p-8 bg-gray-700 border border-gray-500 roundeds'>
          <strong className='text-2xl mb-6 block'>Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe} className='flex flex-col gap-2 w-full'>
            <input 
              onChange={event => setName(event.target.value)}
              type="text" 
              placeholder='Seu nome completo'
              className='bg-gray-900 px-5 h-14 rounded hover:border border-white transition-colors'
            />
            <input 
              onChange={event => setEmail(event.target.value)}
              type="email" 
              placeholder='Seu melhor e-mail'
              className='bg-gray-900 px-5 h-14 rounded hover:border border-white transition-colors'
            />

            <button 
              type='submit'
              disabled={loading}
              className='mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50'
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src="/src/assets/code-mockup.png" alt="Imagem de fundo, tema: códigos"  className="mt-10" />
    </div>
  )
}