FROM mongo:latest

CMD mongod --replSet rs0 --bind_ip_all & \
    sleep 5 && \
    mongosh --eval "rs.initiate({ _id: 'rs0', members: [{ _id: 0, host: '$MONGO_REPLICA_HOST:$MONGO_REPLICA_PORT' }] })" && \
    wait
