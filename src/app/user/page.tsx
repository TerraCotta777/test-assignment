'use client'

import styles from './AccountsListPage.module.scss'
import { useAccounts } from '@/hooks/useAccounts'
import { UserAvatar } from '@/components/userAvatar/UserAvatar'
import Link from 'next/link'

export default function AccountsListPage() {
  const { accounts, isLoading, isError } = useAccounts()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading accounts</div>

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Список аккаунтов</h1>
      <ul className={styles.accountsList}>
        {accounts?.map((account) => (
          <li key={account.slug} className={styles.accountItem}>
            <Link href={`/user/${account.slug}`}>
              <div className={styles.accountInfo}>
                <UserAvatar user={account} size="sm" />
                <div className={styles.userDetails}>
                  <h3 className={styles.name}>{account.name}</h3>
                  <p className={styles.email}>{account.email}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
