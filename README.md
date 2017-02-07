# service-discovery-consul
Sample service discovery with Consul



Create a new temporary directory for consul
```
sudo mkdir /etc/consul.d
```

Start a new agent.
```
consul agent -dev -config-dir=/etc/consul.d
```


Register a 'search service' that is provided by 'www.google.com'.

```
curl -X PUT -d '{"Datacenter": "dc1", "Node": "google",
   "Address": "www.google.com",
   "Service": {"Service": "search", "Port": 80}}'
   http://127.0.0.1:8500/v1/catalog/register
```

/v1/catalog/register : Registers a new node, service, or check
/v1/catalog/deregister : Deregisters a node, service, or check
/v1/catalog/datacenters : Lists known datacenters
/v1/catalog/nodes : Lists nodes in a given DC
/v1/catalog/services : Lists services in a given DC
/v1/catalog/service/<service> : Lists the nodes in a given service
/v1/catalog/node/<node> : Lists the services provided by a node