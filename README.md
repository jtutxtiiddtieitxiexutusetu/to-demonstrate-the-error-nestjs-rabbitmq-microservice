## What is this about?

This is to demonstrate the error that Nest.js is having with RabbitMQ, in a simple concise and reproducable way.

## How to use

Just start `do_dev.sh` and you will at the end (if you are on Ubuntu Mate like me) get two shell terminals running.  
Just do `yarn start` inside both of them and you will get hit by the error.

    [Nest] 50  - 09/24/2022, 11:08:43 AM   ERROR [Server] There is no matching event handler defined in the remote service. Event pattern: one_sent
    [Nest] 50  - 09/24/2022, 11:08:43 AM   ERROR [Server] There is no matching event handler defined in the remote service. Event pattern: one_sent
    [Nest] 50  - 09/24/2022, 11:08:43 AM   ERROR [Server] There is no matching event handler defined in the remote service. Event pattern: one_sent

Although the event is being received on the other side!

    one_sent { one_sent: 'one_sent' }
    one_sent { one_sent: 'one_sent' }
    one_sent { one_sent: 'one_sent' }

Why the hell is this error?  
Please somebody solve this for me.