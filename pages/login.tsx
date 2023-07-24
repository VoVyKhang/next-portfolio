import * as React from 'react'
import { LoginForm } from '../components/auth'

export interface ILoginPageProps {}

export default function LoginPage(props: ILoginPageProps) {
  return (
    <div>
      <LoginForm />
    </div>
  )
}
