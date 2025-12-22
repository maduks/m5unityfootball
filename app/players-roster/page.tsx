'use client'

import { useEffect } from 'react'
import PageHeader from '@/components/PageHeader'
import TeamRosters from '@/components/sections/TeamRosters'
import { initAnimations } from '@/lib/animations'

export default function PlayersRosterPage() {
    useEffect(() => {
        initAnimations()
    }, [])

    return (
        <>
            <PageHeader title="Players" subtitle="Roster" />
            <TeamRosters />
        </>
    )
}
