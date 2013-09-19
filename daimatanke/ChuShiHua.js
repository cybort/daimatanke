var tank;
var _global_ = {
    _default_background: new Color(0.0, 0.0, 0.0, 0.5)
};

function Jx() {
    tank = {
        ui: {
            classic: Color.BLUE,
            red: Color.RED,
            orange: Color.ORANGE,
            yellow: Color.YELLOW,
            green: Color.GREEN,
            indigo: Color.decode("#4B0082"),
            blue: Color.BLUE,
            purple: Color.decode("#800080"),
            gold: Color.decode("#FFD700"),
            white: Color.WHITE
        },

        _default_say_color: Color.decode("#AAAAAA"),
        _default_scan_color: Color.BLUE,
        _default_ui: Color.ORANGE,

        event: {
        },

        Robot: {
            init: function(robotPeer) {
                _global_._peer = robotPeer;
            },

            ahead: function(distance, onFinished)  {
                _global_._peer.ahead(+distance);
                if (arguments.length > 1) {
                    onFinished.apply(this);
                }
            },

            back: function(distance, onFinished) {
                _global_._peer.back(+distance);
                if (arguments.length > 1) {
                    onFinished.apply(this);
                }
            },

            broadcastMessage: function(message) {
                _global_._peer.broadcastMessage(message);
            },

            doNothing: function() {
                _global_._peer.doNothing();
            },

            execute: function(onFinished) {
                _global_._peer.execute();
                if (arguments.length > 1) {
                    onFinished.apply(this);
                }
            },

            fire: function(power) {
                _global_._peer.fire(+power);
            },

            getBattleFieldHeight: function() {
                return _global_._peer.getBattleFieldHeight();
            },

            getBattleFieldSize: function() {
                return [
                    _global_._peer.getBattleFieldWidth(),
                    _global_._peer.getBattleFieldHeight()];
            },

            getBattleFieldWidth: function() {
                return _global_._peer.getBattleFieldWidth();
            },

            getDistanceRemaining: function() {
                return _global_._peer.getDistanceRemaining();
            },

            getEnergy: function() {
                return _global_._peer.getEnergy();
            },

            getGraphics: function() {
                return null;
            },

            getGunColdRate: function() {
                return _global_._peer.getGunCoolingRate();
            },

            getGunHeading: function() {
                return _global_._peer.getGunHeading();
            },

            getGunHeat: function() {
                return _global_._peer.getGunHeat();
            },

            getGunTurnRemaining: function() {
                return _global_._peer.getGunTurnRemaining();
            },

            getHeading: function() {
                return _global_._peer.getHeading();
            },

            getHeight: function() {
                return _global_._peer.getHeight();
            },

            getName: function() {
                return _global_._peer.getName();
            },

            getOthers: function() {
                return _global_._peer.getOthers();
            },

            getPos: function() {
                return [_global_._peer.getX(), _global_._peer.getY()];
            },

            getRadarHeading: function() {
                return _global_._peer.getRadarHeading();
            },

            getRadarTurnRemaining: function() {
                return _global_._peer.getRadarTurnRemaining();
            },

            getSize: function() {
                return [_global_._peer.getWidth(), _global_._peer.getHeight()];
            },

            getSpeed: function() {
                return _global_._peer.getVelocity();
            },

            getTeammates: function() {
                return _global_._peer.getTeammates() || [];
            },

            getTurnRemaining: function() {
                return _global_._peer.getTurnRemaining();
            },

            getWidth: function() {
                return _global_._peer.getWidth();
            },

            getX: function() {
                return _global_._peer.getX();
            },

            getY: function() {
                return _global_._peer.getY();
            },

            isTeammate: function(name) {
                return _global_._peer.isTeammate(String(name));
            },

            log: function(msg, tag) {
                var message = "Turn " + _global_._peer.getTime() + ": ";
                if (tag) {
                    message += "[" + String(tag) + "] ";
                }
                message += String(msg);
                _global_._peer.out.println(message);
            },

            loop: function(func) {
                while(true) {
                    func.apply(this);
                }
            },

            onBulletHit: function(e) {
            },

            onBulletHitBullet: function(e) {
            },

            onBulletMissed: function(e) {
            },

            onDeath: function(e) {
            },

            onHitByBullet: function(e) {
            },

            onHitRobot: function(e) {
            },

            onHitWall: function(e) {
            },

            onRobotDeath: function(e) {
            },

            onScannedRobot: function(e) {
            },

            onWin: function(e) {
            },

            onClick: function(e) {
            },

            onKeyDown: function(e) {
            },

            onKeyUp: function(e) {
            },

            onMouseDown: function(e) {
            },

            onMouseMove: function(e) {
            },

            onMouseUp: function(e) {
            },

            onPaint: function(context) {

            },
            onMessageReceived: function(e) {
            },

            run: function(e) {
            },

            say: function(words, color) {
                _global_._words = String(words);
                _global_._color = tank.ui[color] || tank._default_say_color;
            },

            scan: function() {
                _global_._peer.scan();
            },

            sendMessage: function(name, message) {
                _global_._peer.sendMessage(String(name), message);
            },

            setAdjustGunForRobotTurn: function(independent) {
                _global_._peer.setAdjustGunForRobotTurn(!!independent);
            },

            setAdjustRadarForGunTurn: function(independent) {
                _global_._peer.setAdjustRadarForGunTurn(!!independent);
            },

            setAdjustRadarForRobotTurn: function(independent) {
                _global_._peer.setAdjustRadarForRobotTurn(!!independent);
            },

            setAhead: function(distance) {
                _global_._peer.setAhead(+distance);
            },

            setFire: function(power) {
                _global_._peer.setFire(+power);
            },

            setGunTurn: function(angle) {
                _global_._peer.setTurnGunRight(+angle);
            },

            setGunTurnLeft: function(angle) {
                _global_._peer.setTurnGunLeft(+angle);
            },

            setGunTurnRight: function(angle) {
                _global_._peer.setTurnGunRight(+angle);
            },

            setRadarTurn: function(angle) {
                _global_._peer.setTurnRadarRight(+angle);
            },

            setRadarTurnLeft: function(angle) {
                _global_._peer.setTurnRadarLeft(+angle);
            },

            setRadarTurnRight: function(angle) {
                _global_._peer.setTurnRadarRight(+angle);
            },

            setScanStyle: function(style) {
                _global_._peer.setScanColor(tank.ui[style] || tank._default_scan_color);
            },

            setTurn: function(angle) {
                _global_._peer.setTurnRight(+angle);
            },

            setTurnLeft: function(angle) {
                _global_._peer.setTurnLeft(+angle);
            },

            setTurnRight: function(angle) {
                _global_._peer.setTurnRight(+angle);
            },

            setUI: function(color) {
                color = color || tank._default_ui;
                _global_._peer.setColors(color, color, color);
            },

            stopMove: function() {
                _global_._peer.stop();
            },

            turn: function(angle, onFinished) {
                _global_._peer.turnRight(+angle);
                if (arguments.length > 1) {
                    onFinished.apply(this);
                }
            },

            turnGun: function(angle, onFinished) {
                _global_._peer.turnGunRight(+angle);
                if (arguments.length > 1) {
                    onFinished.apply(this);
                }
            },

            turnGunLeft: function(angle, onFinished) {
                _global_._peer.turnGunLeft(+angle);
                if (arguments.length > 1) {
                    onFinished.apply(this);
                }
            },

            turnGunRight: function(angle, onFinished) {
                _global_._peer.turnGunRight(+angle);
                if (arguments.length > 1) {
                    onFinished.apply(this);
                }
            },

            turnLeft: function(angle, onFinished) {
                _global_._peer.turnLeft(+angle);
                if (arguments.length > 1) {
                    onFinished.apply(this);
                }
            },

            turnRadar: function(angle, onFinished) {
                _global_._peer.turnRadarRight(+angle);
                if (arguments.length > 1) {
                    onFinished.apply(this);
                }
            },

            turnRadarLeft: function(angle, onFinished) {
                _global_._peer.turnRadarLeft(+angle);
                 if (arguments.length > 1) {
                    onFinished.apply(this);
                }
            },

            turnRadarRight: function(angle, onFinished) {
                _global_._peer.turnRadarRight(+angle);
                if (arguments.length > 1) {
                    onFinished.apply(this);
                }
            },

            turnRight: function(angle, onFinished) {
                _global_._peer.turnRight(+angle);
                if (arguments.length > 1) {
                    onFinished.apply(this);
                }
            }
        }
    };

    tank.event.HitByBulletEvent = function (event) {
        this.event = event;
    };

    tank.event.HitByBulletEvent.prototype = {
        getBearing: function() {
            return this.event.getBearing();
        },

        getBullet: function() {
            return this.event.getBullet();
        },

        getHeading: function() {
            return this.event.getHeading();
        },

        getName: function() {
            return this.event.getName();
        },

        getPower: function() {
            return this.event.getPower();
        },

        getSpeed: function() {
            return this.event.getVelocity();
        }
    };

    tank.event.ScannedRobotEvent = function(event) {
        this.event = event;
    };

    tank.event.ScannedRobotEvent.prototype = {
        getBearing: function() {
            return this.event.getBearing();
        },

        getDistance: function() {
            return this.event.getDistance();
        },

        getEnergy: function() {
            return this.event.getEnergy();
        },

        getHeading: function() {
            return this.event.getHeading();
        },

        getName: function() {
            return this.event.getName();
        },

        getSpeed: function() {
            return this.event.getVelocity();
        }
    };

    tank.event.MouseEvent = function(event) {
        this.event = event;
    };

    tank.event.MouseEvent.prototype = {
        getButton: function() {
            return this.event.getButton();
        },

        getPos: function() {
            return [this.event.getX(), this.event.getY()];
        }
    };

    tank.event.PaintEvent = function(g) {
        this.g = g;
    };

    tank.event.PaintEvent.prototype = {
        getContext: function() {
            return this.g;
        }
    };

    function Class(meta, attrs) { // no parent
        function clazz() {
            if (this.init) {
                this.init.apply(this, arguments);
            }
        }

        if (arguments.length > 1) {
            var parent = meta["extend"];
            attrs.__proto__ = parent;
        }

        clazz.prototype = attrs;
        clazz.prototype.constructor = clazz;
        return clazz;
    }

    return {
        "$package":function(func) {
            func({"Class": Class});
        }};
}

function onBulletHit(e) {
    _global_._robot.onBulletHit(e);
}

function onBulletHitBullet(e) {
    _global_._robot.onBulletHitBullet(e);
}

function onBulletMissed(e) {
    _global_._robot.onBulletMissed(e);
}

function onDeath(e) {
    _global_._robot.onDeath(e);
}

function onHitByBullet(e) {
    _global_._robot.onHitByBullet(
        new tank.event.HitByBulletEvent(e));
}

function onHitRobot(e) {
    _global_._robot.onHitRobot(e);
}

function onHitWall(e) {
    _global_._robot.onHitWall(e);
}

function onRobotDeath(e) {
    _global_._robot.onRobotDeath(e);
}

function onScannedRobot(e) {
    _global_._robot.onScannedRobot(
        new tank.event.ScannedRobotEvent(e));
}

function onWin(e) {
    _global_._robot.onWin(e);
}

function onKeyPressed(e) {
    _global_._robot.onKeyDown(e);
}

function onKeyReleased(e) {
    _global_._robot.onKeyUp(e);
}

function onMousePressed(e) {
    _global_._robot.onMouseDown(
        new tank.event.MouseEvent(e));
}

function onMouseClicked(e) {
    _global_._robot.onClick(
        new tank.event.MouseEvent(e));
}

function onMouseMoved(e) {
    _global_._robot.onMouseMove(
        new tank.event.MouseEvent(e));
}

function onMouseReleased(e) {
    _global_._robot.onMouseUp(
        new tank.event.MouseEvent(e));
}

function onPaint(g) {
    var _font = g.getFont();

    _global_._robot.onPaint(
        new tank.event.PaintEvent(g));

    if (!_global_._background) {
        var fonts = java.awt.GraphicsEnvironment.getLocalGraphicsEnvironment().getAllFonts();

        for(var i=0; i<fonts.length; i++) {
            var font = fonts[i];
            if (font.canDisplay(0x70ae)) {
                _global_._font = font.deriveFont(14);
                break;
            }
        }

        _global_._background = _global_._default_background;
    }

    if (!_global_._words) {
        return;
    }

    var font = _global_._font || _font;
    g.setFont(font);

    var s = _global_._words;
    var rect = font.getStringBounds(s, g.getFontRenderContext());
    var width = rect.getWidth() + 2;
    var height = rect.getHeight() + 2;

    var x = this.getX();
    var y = this.getY() + this.getHeight();

    g.setColor(_global_._background);
    g.fillRoundRect(
        x - width / 2,
        y + height / 2,
        width + 4,
        height + 4,
        4,
        4);

    g.setColor(_global_._color);
    g.drawString(
        _global_._words,
        x - width / 2 + 2,
        y + height / 2 + 4);
}

function onMessageReceived(e) {
    _global_._robot.onMessageReceived(e);
}

function run() {
    var robot = new Robot(this);
    _global_._robot = robot;
    robot.run();
}

function alert(s) {
    java.lang.System.out.println("ALERT: " + s);
}

var console = {
    log: function(s) {
        java.lang.System.out.println("LOG: " + s);
    },

    info: function(s) {
        java.lang.System.out.println("INFO: " + s);
    }
};
