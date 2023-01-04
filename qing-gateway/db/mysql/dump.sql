create table if not exists q_limit_rule
(
    id       bigint auto_increment
        primary key,
    limitKey varchar(255) not null comment '限流key，ip或接口名',
    type     varchar(64)  not null comment '限流规则类型，ip还是接口',
    timeUnit varchar(64)  not null comment '限流单位，秒或分钟',
    QPS      int          null,
    QPM      int          null
);

create table if not exists q_log
(
    id               bigint auto_increment
        primary key,
    originURI        varchar(100) not null,
    target_service   varchar(100) null,
    service_instance varchar(100) null,
    route_name       varchar(100) null,
    proxyURI         varchar(100) null,
    created_time     datetime     not null,
    originIP         varchar(100) null,
    trace_id         varchar(256) null
);

create table if not exists q_nacos_info
(
    id           bigint auto_increment
        primary key,
    address      varchar(64)  default '' not null comment 'nacos地址',
    description  varchar(200) default '' null comment '描述',
    enabled      bit                     not null comment '是否开启，1开启0未开启',
    created_time datetime                not null comment '创建时间',
    constraint idx_address
        unique (address)
);

create table if not exists q_plugin
(
    id           bigint auto_increment
        primary key,
    name         varchar(32) default ''     not null comment '插件名称 eg:DynamicRoute,类的名称',
    description  varchar(32) default ''     not null comment '描述，如鉴权',
    `order`      int         default 999999 not null comment '顺序',
    skip         bit         default b'0'   not null comment '0为false，1为true',
    created_time datetime                   not null comment '创建时间'
);

create table if not exists q_route_rule
(
    id           bigint auto_increment
        primary key,
    service_id   bigint                   not null comment '转发到的应用Id',
    predicates   varchar(50) default ''   not null comment '匹配key,路由断言',
    priority     int         default 0    not null comment '优先级，值越大优先级越高',
    enabled      bit         default b'0' not null comment '是否启用，1=开启0=禁用',
    created_time datetime                 not null comment '创建时间'
);

create table if not exists q_service
(
    id           bigint auto_increment
        primary key,
    service_name varchar(32)  default '' not null comment '应用名称',
    description  varchar(200) default '' null comment '描述',
    context_path varchar(32)  default '' not null comment '路径上下文',
    enabled      bit                     not null comment '是否开启，1开启0未开启',
    created_time datetime                not null comment '创建时间',
    constraint idx_servicename
        unique (service_name) comment '服务名应该是唯一的'
);

create table if not exists q_service_instance
(
    id           bigint auto_increment
        primary key,
    service_id   bigint                     not null comment '应用id',
    version      varchar(32) default ''     not null comment '实例的版本号',
    ip           varchar(64) default ''     not null comment '实例ip',
    port         varchar(16) default '8080' not null comment '实例port',
    weight       int         default 0      not null comment '权重',
    clusterName  varchar(64) default ''     not null comment '集群',
    protocol     varchar(64) default ''     not null comment '服务实例的协议',
    created_time datetime                   not null comment '创建时间',
    constraint idx_ip_port
        unique (ip, port) comment 'ip+port唯一'
);

create table if not exists q_user
(
    id              bigint auto_increment
        primary key,
    username        varchar(100) not null,
    password        varchar(256) not null,
    created_time    datetime     not null,
    last_login_time datetime     not null,
    salt            varchar(256) not null
);

create table if not exists q_websocket_info
(
    id           bigint auto_increment
        primary key,
    enabled      bit              not null comment '是否开启，1开启0未开启',
    created_time datetime         not null comment '创建时间',
    ip           varchar(128)     null comment 'ip地址',
    client_id    varchar(128)     not null,
    status       bit default b'0' not null
);

