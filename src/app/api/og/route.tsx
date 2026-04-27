import { ImageResponse } from 'next/og';
// App router includes @vercel/og by default in Next.js 13+

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'PakCareers - Pakistan Government Jobs Portal';

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: '#fff',
            backgroundSize: '150px 150px',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                padding: '20px',
                borderRadius: '20px',
                background: '#1B6B35',
                color: 'white',
                fontSize: '40px',
                fontWeight: 'bold',
              }}
            >
              PK
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '60px',
              fontStyle: 'normal',
              color: '#111827',
              marginTop: '30px',
              lineHeight: 1.2,
              whiteSpace: 'pre-wrap',
              fontWeight: 'bold',
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '30px',
              color: '#4B5563',
              marginTop: '20px',
            }}
          >
            pakcareers.pk · Government Jobs in Pakistan
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
