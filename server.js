const consul = require('consul')()


// consul.acl.create(function(err, result) {
//   if (err) throw err;
//   const id = result.ID

//   consul.acl.update({ id, name: 'test' }, function(err) {
//     if (err) throw err
//   })
// })
// Returns the agent node configuration
consul.agent.self((error, result) => {
  if (error) {
    throw error
  }
  // console.log('self', result)
})

// // Returns the members as seen by the consul agent.
consul.agent.members((error, result) => {
  if (error) {
    throw error
  }
  // console.log('members', result)
})

// // Set node maintenance mode.
// consul.agent.maintenance(true, function(err) {
//   if (err) throw err
// })

// // Trigger agent to join a node.
// consul.agent.join('127.0.0.2', function(err) {
//   if (err) throw err
// })

// // Force remove node.
// consul.agent.forceLeave('node2', function(err) {
//   if (err) throw err
// })

// // Returns the checks the agent is managing.
// consul.agent.check.list(function(err, result) {
//   if (err) throw err
// })

// var check = {
//   name: 'example',
//   ttl: '15s',
//   notes: 'This is an example check.',
// };
 
// consul.agent.check.register(check, function(err) {
//   if (err) throw err;
// });

// consul.agent.check.deregister('example', function(err) {
//   if (err) throw err;
// });



consul.agent.service.register({
  name: 'glossary',
  tags: ['nodejs']
}, (error) => {
  if (error) {
    throw error
  }
  console.log('successfully registered glossary')
})
consul.agent.service.list((error, result) => {
  if (error) {
    throw error
  }
  console.log('list services', result)
})

// consul.agent.service.deregister('web', (error) => {
//   if (error) {
//     throw error
//   }
//   console.log('successfully deregistered service')
// })

// consul.agent.service.maintenance({ id: 'example', enable: true }, function(err) {
//   if (err) throw err;
// });

// consul.catalog.datacenters(function(err, result) {
//   if (err) throw err;
// });