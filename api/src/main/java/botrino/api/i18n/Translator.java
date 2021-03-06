/*
 * This file is part of the Botrino project and is licensed under the MIT license.
 *
 * Copyright (c) 2020 Alexandre Miranda
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
package botrino.api.i18n;

import java.text.MessageFormat;
import java.util.Locale;
import java.util.ResourceBundle;

/**
 * A class implementing this interface is able to translate strings.
 */
@FunctionalInterface
public interface Translator {

    /**
     * Creates a new {@link Translator} that translates to the target locale.
     *
     * @param locale the target locale
     * @return a new {@link Translator}
     */
    static Translator to(Locale locale) {
        return () -> locale;
    }

    /**
     * Translates a string.
     *
     * @param bundle the name of the bundle where to find the strings
     * @param key    the key identifying the string
     * @param args   the arguments of the string, if any
     * @return the translated string
     */
    default String translate(String bundle, String key, Object... args) {
        return MessageFormat.format(ResourceBundle.getBundle(bundle, getLocale()).getString(key), args);
    }

    /**
     * Gets the locale used by this translator.
     *
     * @return the locale
     */
    Locale getLocale();
}
