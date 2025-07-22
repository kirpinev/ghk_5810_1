declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (e: "event", v: string, data?: Record<string, string>) => void;
  }
}

type Payload = {
  engage_price: number;
};

export const sendDataToGA = async (payload: Payload) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      "https://script.google.com/macros/s/AKfycbwaqw5OdpdBd3kRV6g_rYHef0FekBEqPjvZxgWQ02_VEB0JktU6jTytziQ1fF8-11NOQg/exec",
      {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify({ date, ...payload, variant: "variant5" }),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      },
    );
  } catch (error) {
    console.error("Error!", error);
  }
};
