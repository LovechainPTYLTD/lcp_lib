# LCP main library

This is a library used in [Lovecoin Plus](http://loveecoin) clients.  Never used directly. 

app directory is `~/.config/[app_name]`

the app name will depend on client which could be `lcp_full_node` or `lcp_hub`

## Configuring

The default settings are in the library's [conf.js](conf.js), they can be overridden by the conf.js file found in the root of any client.

## Settings

This is the list of some of the settings that the library understands (your app can add more settings that only your app understands):

#### conf.port

The port to listen on.  If you don't want to accept incoming connections at all, set port to `null`, which is the default.  If you do want to listen, you will usually have a proxy, such as nginx, accept websocket connections on standard port 443 and forward them to your lcp daemon that listens on port 6611 on the local interface.

#### conf.storage

Storage backend -- mysql or sqlite, the default is sqlite.  If sqlite, the database files are stored in the app data folder.  If mysql, you need to also initialize the database with [byteball.sql](byteball.sql) and set connection params, e.g. in conf.json in the app data folder:

```json
{
	"port": 6611,
	"storage": "mysql",
	"database": {
		"max_connections": 30,
		"host"     : "localhost",
		"user"     : "byteball",
		"password" : "yourmysqlpassword",
		"name"     : "byteball"
	}
}
```
#### conf.bLight

Work as light client (`true`) or full node (`false`).  The default is full client. full nodes save all transactions that it receives on the network and a light client does not. At the time of writing the full DAG is less than 2.7 GB.

#### conf.bServeAsHub

Whether to serve as hub on the LCP network (store and forward end to end encrypted messages for devices that connect to your hub).  The default is `false`.

#### conf.myUrl

If your node accepts incoming connections, this is its URL.  The node will share this URL with all its outgoing peers so that they can reconnect in any direction in the future.  By default the node doesn't share its URL even if it accepts connections.

#### conf.bWantNewPeers

Whether your node wants to learn about new peers from its current peers (`true`, the default) or not (`false`).  Set it to `false` to run your node in stealth mode so that only trusted peers can see its IP address (e.g. if you have online wallets on your server and don't want potential attackers to learn its IP).

#### conf.socksHost, conf.socksPort, and conf.socksLocalDNS

Settings for connecting through optional SOCKS5 proxy.  Use them to connect through TOR and hide your IP address from peers even when making outgoing connections.  This is useful and highly recommended when you are running an online wallet on your server and want to make it harder for potential attackers to learn the IP address of the target to attack.  Set `socksLocalDNS` to `false` to route DNS queries through TOR as well.

#### MySQL conf for faster syncing

To lower disk load and increase sync speed, you can optionally disable flushing to disk every transaction, instead doing it once a second. This can be done by setting `innodb_flush_log_at_trx_commit=0` in your MySQL server config file (my.ini)

## Accepting incoming connections

LCP network works over WebSocket protocol `ws://`


For example `--max-old-space-size=4096`, if your server has at least 4GB available.
