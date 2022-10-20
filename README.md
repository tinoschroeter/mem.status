# Mem Status

[icon](https://raw.githubusercontent.com/tinoschroeter/mem.status/master/screenshot.png)


I often run out of RAM, so I try to keep an eye on it.

```bash
sudo git clone https://github.com/tinoschroeter/mem.status.git /opt/mem.status
```

## systemD setup

```bash
/etc/systemd/system/multi-user.target.wants/mem-status.service

[Unit]
Description=Gewitter blink

[Service]
Type=simple
ExecStart=node /opt/mem.status/index.js
Restart=always

[Install]
WantedBy=multi-user.target
```

```bash
systemctl enable mem.status.service

systemctl start mem.status.service
systemctl status mem.status.service
```
