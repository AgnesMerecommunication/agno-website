import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Agno - Reseautez facilement avec une carte de visite numerique"}
                </title>
            </Head>
        </>
    )
}

export default PageHead