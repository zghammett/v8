export const metadata = {
  title: "Red White & Clean",
  description: "Veteran owned pressure washing in Kansas City"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin:0,fontFamily:"Arial, sans-serif"}}>
        {children}
      </body>
    </html>
  )
}
