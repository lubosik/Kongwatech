import { redirect } from 'next/navigation'

export default function KongwaSessionRedirect() {
  redirect('/services/echo-launch')
}
