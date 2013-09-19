#!/usr/bin/env bash

CLASSPATH="${ROBOCODE_HOME}/libs/codesize-1.1.jar"
CLASSPATH="${CLASSPATH}:${ROBOCODE_HOME}/libs/picocontainer-2.14.2.jar"
CLASSPATH="${CLASSPATH}:${ROBOCODE_HOME}/libs/robocode.battle-1.8.2.0.jar"
CLASSPATH="${CLASSPATH}:${ROBOCODE_HOME}/libs/robocode.core-1.8.2.0.jar"
CLASSPATH="${CLASSPATH}:${ROBOCODE_HOME}/libs/robocode.host-1.8.2.0.jar"
CLASSPATH="${CLASSPATH}:${ROBOCODE_HOME}/libs/robocode.jar"
CLASSPATH="${CLASSPATH}:${ROBOCODE_HOME}/libs/robocode.repository-1.8.2.0.jar"
CLASSPATH="${CLASSPATH}:${ROBOCODE_HOME}/libs/robocode.loaders-0.1.jar"
CLASSPATH="${CLASSPATH}:${ROBOCODE_HOME}/libs/robocode.loaders.rhino-0.1.jar"

java -cp /usr/share/java/js.jar org.mozilla.javascript.tools.jsc.Main -d . -nosource -opt 9 -package net.sf.robocode.daimatanke daimatanke/ChuShiHua.js
javac -cp ".:/usr/share/java/js.jar:${CLASSPATH}" -d . daimatanke/*.java
jar cvf robocode.daimatanke-0.1.jar net/sf/robocode/daimatanke/*.class
