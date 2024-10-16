import Child from "@/components/child/child";
import {TransactionProvider } from '@/components/transationContext'


export default function Home() {
  return (

    // <div>
    //  <Child />
    // </div>
    <TransactionProvider >
      <Child />
    </TransactionProvider>
  );
}
